import { NextResponse } from 'next/server';

const LEETCODE_API_URL = 'https://leetcode.com/graphql';

const query = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      profile {
        ranking
      }
      submissionCalendar
    }
    allQuestionsCount {
      difficulty
      count
    }
  }
`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || 'gkforge';

  try {
    const response = await fetch(LEETCODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode data');
    }

    const data = await response.json();
    
    if (data.errors || !data.data.matchedUser) {
      return NextResponse.json(
        { error: 'User not found', username },
        { status: 404 }
      );
    }

    const user = data.data.matchedUser;
    const allQuestions = data.data.allQuestionsCount;
    const submitStats = user.submitStats.acSubmissionNum;

    // Parse submission calendar for activity data
    const calendar = JSON.parse(user.submissionCalendar || '{}');
    const activityData = parseActivityData(calendar);

    // Get counts by difficulty
    const getCount = (difficulty: string) => {
      const stat = submitStats.find((s: { difficulty: string }) => s.difficulty === difficulty);
      return stat ? stat.count : 0;
    };

    const getTotal = (difficulty: string) => {
      const q = allQuestions.find((q: { difficulty: string }) => q.difficulty === difficulty);
      return q ? q.count : 0;
    };

    const totalSolved = submitStats.find((s: { difficulty: string }) => s.difficulty === 'All')?.count || 0;
    const totalSubmissions = submitStats.find((s: { difficulty: string }) => s.difficulty === 'All')?.submissions || 0;

    const result = {
      username: user.username,
      profileUrl: `https://leetcode.com/u/${user.username}`,
      totalSolved,
      easy: { solved: getCount('Easy'), total: getTotal('Easy') },
      medium: { solved: getCount('Medium'), total: getTotal('Medium') },
      hard: { solved: getCount('Hard'), total: getTotal('Hard') },
      submissions: totalSubmissions,
      ranking: user.profile?.ranking || 0,
      streak: activityData.streak,
      recentActivity: activityData.months,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('LeetCode API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch LeetCode data' },
      { status: 500 }
    );
  }
}

function parseActivityData(calendar: Record<string, number>) {
  const now = new Date();
  const months: { month: string; days: number[] }[] = [];
  let streak = 0;
  let currentStreak = 0;
  
  // Get last 4 months of data
  for (let m = 3; m >= 0; m--) {
    const date = new Date(now.getFullYear(), now.getMonth() - m, 1);
    const monthName = date.toLocaleString('default', { month: 'short' });
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const days: number[] = [];
    for (let d = 1; d <= Math.min(7, daysInMonth); d++) {
      const dayDate = new Date(date.getFullYear(), date.getMonth(), d);
      const timestamp = Math.floor(dayDate.getTime() / 1000);
      const count = calendar[timestamp] || 0;
      days.push(count);
      
      if (count > 0) {
        currentStreak++;
        streak = Math.max(streak, currentStreak);
      } else {
        currentStreak = 0;
      }
    }
    
    months.push({ month: monthName, days });
  }

  return { months, streak: Math.max(streak, 1) };
}

