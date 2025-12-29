// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'about' to learn more about me.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `
Hi! My name is ${config.name}.

I hold a Bachelors in Electrical Engineering from NYU and a Masters in Computer Science from Cornell.
I'm currently working as a Software Engineer at Gecko Robotics.
My hobbies include playing and watching soccer (I'm an avid Chelsea fan), and playing the piano.
I currently reside in New York.

CONTACT
-------
<u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
<u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
<u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>

LINKS
-----
<u><a href="${config.resume_url}" target="_blank">Resume/CV</a></u>
<u><a href="${config.repo}" target="_blank">Github</a></u>
`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Interactive Media Project command
export const improject = async (args: string[]): Promise<string> => {
  window.open(
    'https://antonytahan.github.io/interactive-media-project/',
    '_blank',
  );
  return 'Opening Interactive Media Project...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// Typical linux commands
export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
   █████████               █████                                  
  ███░░░░░███             ░░███                                   
 ░███    ░███  ████████   ███████    ██████  ████████   █████ ████
 ░███████████ ░░███░░███ ░░░███░    ███░░███░░███░░███ ░░███ ░███ 
 ░███░░░░░███  ░███ ░███   ░███    ░███ ░███ ░███ ░███  ░███ ░███ 
 ░███    ░███  ░███ ░███   ░███ ███░███ ░███ ░███ ░███  ░███ ░███ 
 █████   █████ ████ █████  ░░█████ ░░██████  ████ █████ ░░███████ 
░░░░░   ░░░░░ ░░░░ ░░░░░    ░░░░░   ░░░░░░  ░░░░ ░░░░░   ░░░░░███ 
                                                         ███ ░███ 
                                                        ░░██████  
                                                         ░░░░░░   
 ███████████           █████                                      
░█░░░███░░░█          ░░███                                       
░   ░███  ░   ██████   ░███████    ██████   ████████              
    ░███     ░░░░░███  ░███░░███  ░░░░░███ ░░███░░███             
    ░███      ███████  ░███ ░███   ███████  ░███ ░███             
    ░███     ███░░███  ░███ ░███  ███░░███  ░███ ░███             
    █████   ░░████████ ████ █████░░████████ ████ █████            
   ░░░░░     ░░░░░░░░ ░░░░ ░░░░░  ░░░░░░░░ ░░░░ ░░░░░             

Type 'about' to learn more about me.
Type 'resume' to view my CV.
Type 'linkedin' or 'email' to get in touch.
Type 'help' to see all available commands.
`;
};
