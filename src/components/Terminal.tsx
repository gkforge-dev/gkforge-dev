'use client';

import { useState, useRef, useEffect, KeyboardEvent, ReactNode } from 'react';
import { ABOUT, PROJECTS, CONTACT, ASCII_BANNER, HELP_COMMANDS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '@/data/content';

interface OutputLine {
  id: number;
  content: ReactNode;
  type: 'output' | 'command' | 'error' | 'success';
}

type Directory = '~' | 'skills' | 'projects' | 'experience' | 'education' | 'contact';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<OutputLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [currentDir, setCurrentDir] = useState<Directory>('~');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const outputIdRef = useRef(0);

  const directories = ['skills', 'projects', 'experience', 'education', 'contact'];

  const getNextId = () => {
    outputIdRef.current += 1;
    return outputIdRef.current;
  };

  const getPromptPath = () => {
    return currentDir === '~' ? '~' : `~/${currentDir}`;
  };

  // Initial welcome message
  useEffect(() => {
    const welcomeLines: OutputLine[] = [
      {
        id: getNextId(),
        content: <pre className="ascii-art">{ASCII_BANNER}</pre>,
        type: 'output'
      },
      {
        id: getNextId(),
        content: <div className="tagline">⚡ Code Your Thoughts. ⚡</div>,
        type: 'output'
      },
      {
        id: getNextId(),
        content: <span className="welcome-sub">Welcome to my terminal portfolio</span>,
        type: 'output'
      },
      {
        id: getNextId(),
        content: <span className="hint-text">Type &quot;help&quot; to see available commands</span>,
        type: 'output'
      }
    ];
    setOutput(welcomeLines);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [output, downloadProgress]);

  // Focus input on click
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const addOutput = (content: ReactNode, type: OutputLine['type'] = 'output') => {
    setOutput(prev => [...prev, { id: getNextId(), content, type }]);
  };

  const renderHelp = () => {
    return (
      <div>
        <div className="section-header">━━━ Available Commands ━━━</div>
        {HELP_COMMANDS.map((cmd, i) => (
          <div key={i} className="help-command">
            <span className="command-name">{cmd.command}</span>
            <span className="command-desc">{cmd.description}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderAbout = () => {
    return (
      <div>
        <div className="section-header">━━━ About Me ━━━</div>
        <p className="about-text">{ABOUT.intro}</p>
        <div style={{ margin: '12px 0' }}>
          {ABOUT.details.map((detail, i) => (
            <div key={i} className="output-line">{detail}</div>
          ))}
        </div>
      </div>
    );
  };

  // Root level ls - show directories
  const renderRootLs = () => {
    return (
      <div className="ls-output">
        <div className="ls-grid">
          <span className="ls-dir">skills/</span>
          <span className="ls-dir">projects/</span>
          <span className="ls-dir">experience/</span>
          <span className="ls-dir">education/</span>
          <span className="ls-dir">contact/</span>
          <span className="ls-file">about.txt</span>
          <span className="ls-file">resume.pdf</span>
        </div>
        <div className="hint-text" style={{ marginTop: '12px' }}>
          Use &quot;cd &lt;directory&gt;&quot; to navigate, &quot;ls&quot; to list contents
        </div>
      </div>
    );
  };

  // Skills directory ls
  const renderSkillsLs = () => {
    return (
      <div>
        <div className="section-header">━━━ ~/skills ━━━</div>
        
        <div className="ls-category">
          <span className="ls-category-title">languages/</span>
          <div className="ls-items">
            {ABOUT.skills.languages.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="ls-category">
          <span className="ls-category-title">frameworks/</span>
          <div className="ls-items">
            {ABOUT.skills.frameworks.map((skill, i) => (
              <span key={i} className="skill-tag framework">{skill}</span>
            ))}
          </div>
        </div>

        <div className="ls-category">
          <span className="ls-category-title">cloud/</span>
          <div className="ls-items">
            {ABOUT.skills.cloud.map((skill, i) => (
              <span key={i} className="skill-tag cloud">{skill}</span>
            ))}
          </div>
        </div>

        <div className="ls-category">
          <span className="ls-category-title">databases/</span>
          <div className="ls-items">
            {ABOUT.skills.databases.map((skill, i) => (
              <span key={i} className="skill-tag database">{skill}</span>
            ))}
          </div>
        </div>

        <div className="ls-category">
          <span className="ls-category-title">tools/</span>
          <div className="ls-items">
            {ABOUT.skills.tools.map((skill, i) => (
              <span key={i} className="skill-tag tools">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Experience directory ls
  const renderExperienceLs = () => {
    return (
      <div>
        <div className="section-header">━━━ ~/experience ━━━</div>
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="experience-card">
            <div className="experience-header">
              <span className="experience-role">{exp.role}</span>
              <span className="experience-period">{exp.period}</span>
            </div>
            <div className="experience-company">{exp.company}</div>
            <div className="experience-location">{exp.location}</div>
            <ul className="experience-highlights">
              {exp.highlights.map((highlight, j) => (
                <li key={j}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  // Projects directory ls
  const renderProjectsLs = () => {
    return (
      <div>
        <div className="section-header">━━━ ~/projects ━━━</div>
        {PROJECTS.map((project, i) => (
          <div key={i} className="project-card">
            <div className="project-header">
              <span className="project-title">▸ {project.name}</span>
              <span className="project-period">{project.period}</span>
            </div>
            <div className="project-role">{project.role}</div>
            <ul className="project-highlights">
              {project.highlights.map((highlight, j) => (
                <li key={j}>{highlight}</li>
              ))}
            </ul>
            <div className="project-tech">
              {project.tech.map((tech, j) => (
                <span key={j} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Education directory ls
  const renderEducationLs = () => {
    return (
      <div>
        <div className="section-header">━━━ ~/education ━━━</div>
        {EDUCATION.map((edu, i) => (
          <div key={i} className="education-card">
            <div className="education-degree">{edu.degree}</div>
            <div className="education-institution">{edu.institution}</div>
            <div className="education-details">
              <span>Graduated: {edu.year}</span>
              <span className="education-cgpa">{edu.cgpa}</span>
            </div>
          </div>
        ))}

        <div className="section-header" style={{ marginTop: '20px' }}>━━━ Certifications ━━━</div>
        {CERTIFICATIONS.map((cert, i) => (
          <div key={i} className="certification-item">
            <span className="cert-name">📜 {cert.name}</span>
            <div className="cert-details">
              <span>{cert.issuer}</span>
              <span className="cert-year">({cert.year})</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Contact directory ls
  const renderContactLs = () => {
    return (
      <div>
        <div className="section-header">━━━ ~/contact ━━━</div>
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href={`mailto:${CONTACT.email}`} className="contact-link">{CONTACT.email}</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <span className="contact-value">{CONTACT.phone}</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">Website:</span>
          <a href={`https://${CONTACT.website}`} target="_blank" rel="noopener noreferrer" className="contact-link">{CONTACT.website}</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">GitHub:</span>
          <a href={`https://${CONTACT.github}`} target="_blank" rel="noopener noreferrer" className="contact-link">{CONTACT.github}</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">LinkedIn:</span>
          <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">{CONTACT.linkedin}</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Location:</span>
          <span className="contact-value">{CONTACT.location}</span>
        </div>
      </div>
    );
  };

  // LeetCode activity - fetch and display
  interface LeetCodeData {
    username: string;
    profileUrl: string;
    totalSolved: number;
    easy: { solved: number; total: number };
    medium: { solved: number; total: number };
    hard: { solved: number; total: number };
    submissions: number;
    ranking: number;
    streak: number;
    recentActivity: { month: string; days: number[] }[];
    lastUpdated: string;
  }

  const fetchLeetCodeData = async () => {
    addOutput(
      <div className="lc-loading">
        <span className="lc-loading-icon">⏳</span> Fetching LeetCode data...
      </div>
    );

    try {
      const response = await fetch('/api/leetcode?username=gkforge');
      
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      
      const data: LeetCodeData = await response.json();
      addOutput(renderLeetCodeData(data));
    } catch {
      addOutput(
        <span className="error-text">
          ❌ Failed to fetch LeetCode data. Please try again later.
        </span>,
        'error'
      );
    }
  };

  const renderLeetCodeData = (data: LeetCodeData) => {
    const easyPercent = data.easy.total > 0 ? Math.round((data.easy.solved / data.easy.total) * 100) : 0;
    const mediumPercent = data.medium.total > 0 ? Math.round((data.medium.solved / data.medium.total) * 100) : 0;
    const hardPercent = data.hard.total > 0 ? Math.round((data.hard.solved / data.hard.total) * 100) : 0;

    const createProgressBar = (solved: number, total: number, color: string) => {
      const percent = total > 0 ? (solved / total) * 100 : 0;
      const filled = Math.round(percent / 5);
      const empty = 20 - filled;
      return (
        <span className="lc-progress">
          <span className={`lc-bar ${color}`}>{'█'.repeat(filled)}</span>
          <span className="lc-bar-empty">{'░'.repeat(empty)}</span>
        </span>
      );
    };

    const formatTime = (isoString: string) => {
      const date = new Date(isoString);
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    return (
      <div className="leetcode-container">
        <div className="section-header">━━━ LeetCode Activity ━━━</div>
        
        <div className="lc-header">
          <span className="lc-logo">{'<LC/>'}</span>
          <a href={data.profileUrl} target="_blank" rel="noopener noreferrer" className="lc-username">
            @{data.username} ↗
          </a>
        </div>

        <div className="lc-stats-grid">
          <div className="lc-stat-card lc-total">
            <div className="lc-stat-icon">🏆</div>
            <div className="lc-stat-label">Total Solved</div>
            <div className="lc-stat-value">{data.totalSolved}</div>
          </div>
          <div className="lc-stat-card lc-easy">
            <div className="lc-stat-label">Easy</div>
            <div className="lc-stat-value">{data.easy.solved}</div>
          </div>
          <div className="lc-stat-card lc-medium">
            <div className="lc-stat-label">Medium</div>
            <div className="lc-stat-value">{data.medium.solved}</div>
          </div>
          <div className="lc-stat-card lc-hard">
            <div className="lc-stat-label">Hard</div>
            <div className="lc-stat-value">{data.hard.solved}</div>
          </div>
        </div>

        <div className="lc-progress-section">
          <div className="lc-progress-row">
            <span className="lc-progress-label easy">Easy</span>
            {createProgressBar(data.easy.solved, data.easy.total, 'easy')}
            <span className="lc-progress-percent">{easyPercent}%</span>
          </div>
          <div className="lc-progress-row">
            <span className="lc-progress-label medium">Medium</span>
            {createProgressBar(data.medium.solved, data.medium.total, 'medium')}
            <span className="lc-progress-percent">{mediumPercent}%</span>
          </div>
          <div className="lc-progress-row">
            <span className="lc-progress-label hard">Hard</span>
            {createProgressBar(data.hard.solved, data.hard.total, 'hard')}
            <span className="lc-progress-percent">{hardPercent}%</span>
          </div>
        </div>

        <div className="lc-metrics">
          <div className="lc-metric">
            <span className="lc-metric-icon">📊</span>
            <span className="lc-metric-value">{data.submissions}</span>
            <span className="lc-metric-label">submissions</span>
          </div>
          <div className="lc-metric">
            <span className="lc-metric-icon">🔥</span>
            <span className="lc-metric-value">{data.streak}</span>
            <span className="lc-metric-label">day streak</span>
          </div>
          <div className="lc-metric">
            <span className="lc-metric-icon">📈</span>
            <span className="lc-metric-value">#{data.ranking.toLocaleString()}</span>
            <span className="lc-metric-label">rank</span>
          </div>
        </div>

        <div className="lc-activity">
          <div className="lc-activity-title">Recent Activity</div>
          <div className="lc-heatmap">
            {data.recentActivity.map((month, i) => (
              <div key={i} className="lc-month">
                <div className="lc-month-label">{month.month}</div>
                <div className="lc-days">
                  {month.days.map((count, j) => (
                    <span 
                      key={j} 
                      className={`lc-day ${count > 0 ? 'active' : ''}`}
                      title={count > 0 ? `${count} submission(s)` : 'No submissions'}
                    >
                      {count > 0 ? '▓' : '░'}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="lc-legend">
            <span>Less</span>
            <span className="lc-legend-boxes">
              <span className="lc-day">░</span>
              <span className="lc-day l1">▒</span>
              <span className="lc-day l2">▓</span>
              <span className="lc-day l3">█</span>
            </span>
            <span>More</span>
          </div>
        </div>

        <div className="lc-footer">
          <span className="lc-api-status">✅ Live data from LeetCode API</span>
          <span className="lc-last-updated"> | Last updated: {formatTime(data.lastUpdated)}</span>
        </div>
      </div>
    );
  };

  const handleLs = () => {
    switch (currentDir) {
      case '~':
        addOutput(renderRootLs());
        break;
      case 'skills':
        addOutput(renderSkillsLs());
        break;
      case 'experience':
        addOutput(renderExperienceLs());
        break;
      case 'projects':
        addOutput(renderProjectsLs());
        break;
      case 'education':
        addOutput(renderEducationLs());
        break;
      case 'contact':
        addOutput(renderContactLs());
        break;
    }
  };

  const handleCd = (target: string) => {
    const cleanTarget = target.trim().toLowerCase().replace(/\/$/, '');
    
    if (cleanTarget === '..' || cleanTarget === '~' || cleanTarget === '') {
      setCurrentDir('~');
      return;
    }

    if (cleanTarget === '.') {
      return; // Stay in current directory
    }

    // Handle paths like ../education or ~/skills
    let dirName = cleanTarget;
    
    // Handle ../<directory> pattern
    if (dirName.startsWith('../')) {
      dirName = dirName.replace('../', '');
    }
    
    // Handle ~/<directory> pattern
    dirName = dirName.replace(/^~\/?/, '');

    if (directories.includes(dirName)) {
      setCurrentDir(dirName as Directory);
    } else {
      addOutput(
        <span className="error-text">cd: no such directory: {target}</span>,
        'error'
      );
    }
  };

  const handlePwd = () => {
    addOutput(<span className="success-text">/home/gopal{currentDir === '~' ? '' : `/${currentDir}`}</span>);
  };

  const handleResume = () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    setDownloadProgress(0);
    
    addOutput(
      <div className="progress-container">
        <div className="progress-text">Downloading Gopal_Khichar_Latest_CV.pdf...</div>
      </div>
    );

    // Simulate download progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setDownloadProgress(100);
        
        setTimeout(() => {
          addOutput(<span className="success-text">✓ Download complete! Opening file...</span>);
          setIsDownloading(false);
          
          // Trigger actual download
          const link = document.createElement('a');
          link.href = '/Gopal_Khichar_Latest_CV.pdf';
          link.download = 'Gopal_Khichar_Latest_CV.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 300);
      } else {
        setDownloadProgress(Math.floor(progress));
      }
    }, 100);
  };

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const lowerCmd = trimmedCmd.toLowerCase();
    const parts = trimmedCmd.split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');
    
    // Add the command to output
    addOutput(
      <div className="command-line">
        <span className="prompt-user">gopal</span>
        <span className="prompt-separator">@</span>
        <span className="prompt-path">portfolio</span>
        <span className="prompt-dir">{getPromptPath()}</span>
        <span className="prompt-arrow">❯</span>
        <span style={{ marginLeft: '8px' }}>{cmd}</span>
      </div>,
      'command'
    );

    // Process the command
    switch (command) {
      case 'help':
        addOutput(renderHelp());
        break;
      case 'about':
      case 'cat':
        if (command === 'cat' && args.toLowerCase().includes('about')) {
          addOutput(renderAbout());
        } else if (command === 'about') {
          addOutput(renderAbout());
        } else {
          addOutput(<span className="error-text">cat: {args}: No such file</span>, 'error');
        }
        break;
      case 'ls':
        handleLs();
        break;
      case 'cd':
        handleCd(args);
        break;
      case 'pwd':
        handlePwd();
        break;
      case 'skills':
        setCurrentDir('skills');
        addOutput(renderSkillsLs());
        break;
      case 'experience':
      case 'exp':
        setCurrentDir('experience');
        addOutput(renderExperienceLs());
        break;
      case 'projects':
        setCurrentDir('projects');
        addOutput(renderProjectsLs());
        break;
      case 'education':
      case 'edu':
        setCurrentDir('education');
        addOutput(renderEducationLs());
        break;
      case 'contact':
        setCurrentDir('contact');
        addOutput(renderContactLs());
        break;
      case 'leetcode':
      case 'lc':
        fetchLeetCodeData();
        break;
      case 'resume':
      case 'cv':
        handleResume();
        break;
      case 'clear':
        setOutput([]);
        setCurrentDir('~');
        break;
      case 'banner':
        addOutput(
          <div>
            <pre className="ascii-art">{ASCII_BANNER}</pre>
            <div className="tagline">⚡ Code Your Thoughts. ⚡</div>
          </div>
        );
        break;
      case 'whoami':
        addOutput(<span className="success-text">gopal - Lead Software Engineer @ iProgrammer Solutions</span>);
        break;
      case 'refresh':
        addOutput(<span className="success-text">Refreshing page...</span>);
        setTimeout(() => {
          window.location.reload();
        }, 500);
        break;
      case '':
        // Empty command, do nothing
        break;
      default:
        addOutput(
          <span className="error-text">
            Command not found: {command}. Type &quot;help&quot; for available commands.
          </span>,
          'error'
        );
    }

    // Add to history
    if (trimmedCmd) {
      setCommandHistory(prev => [...prev, cmd]);
    }
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Tab completion for commands and directories
      const parts = input.split(/\s+/);
      if (parts.length === 1) {
        // Complete command
        const commands = HELP_COMMANDS.map(c => c.command);
        const matches = commands.filter(c => c.startsWith(input.toLowerCase()));
        if (matches.length === 1) {
          setInput(matches[0]);
        }
      } else if (parts[0].toLowerCase() === 'cd' && parts.length === 2) {
        // Complete directory
        const partial = parts[1].toLowerCase();
        const matches = directories.filter(d => d.startsWith(partial));
        if (matches.length === 1) {
          setInput(`cd ${matches[0]}`);
        }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setOutput([]);
    }
  };

  return (
    <div className="crt-container" onClick={handleTerminalClick}>
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <button className="terminal-btn btn-close" aria-label="Close" />
            <button className="terminal-btn btn-minimize" aria-label="Minimize" />
            <button className="terminal-btn btn-maximize" aria-label="Maximize" />
          </div>
          <div className="terminal-title">gopal@portfolio: {getPromptPath()}</div>
          <div style={{ width: '52px' }} />
        </div>
        
        <div className="terminal-body" ref={terminalBodyRef}>
          {output.map((line) => (
            <div key={line.id} className="output-line">
              {line.content}
            </div>
          ))}
          
          {/* Download progress bar */}
          {isDownloading && (
            <div className="progress-container">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${downloadProgress}%` }} 
                  />
                </div>
                <span className="progress-percentage">{downloadProgress}%</span>
              </div>
            </div>
          )}
          
          {/* Input line */}
          <div className="command-line">
            <span className="prompt-user">gopal</span>
            <span className="prompt-separator">@</span>
            <span className="prompt-path">portfolio</span>
            <span className="prompt-dir">{getPromptPath()}</span>
            <span className="prompt-arrow">❯</span>
            <div className="input-wrapper">
              <input
                ref={inputRef}
                type="text"
                className="terminal-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
