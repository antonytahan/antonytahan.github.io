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
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' or 'cv' - my latest CV.
'projects' - view my interactive media projects.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// CV command (alias for resume)
export const cv = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening CV...';
};

// Projects command
export const projects = async (args: string[]): Promise<string> => {
  window.open(
    'https://antonytahan.github.io/interactive-media-project/',
    '_blank',
  );
  return 'Opening Interactive Media Projects...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `Thank you for your interest!`;
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

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
           ,ggg,                                                             ,ggggggggggggggg                                          
          dP""8I                  I8                                        dP""""""88"""""""      ,dPYb,                              
         dP   88                  I8                                        Yb,_    88             IP'\`Yb                              
        dP    88               88888888                                      \`""    88             I8  8I                              
       ,8'    88                  I8                                                88             I8  8'                              
       d88888888    ,ggg,,ggg,    I8     ,ggggg,    ,ggg,,ggg,   gg     gg          88   ,gggg,gg  I8 dPgg,     ,gggg,gg   ,ggg,,ggg,  
 __   ,8"     88   ,8" "8P" "8,   I8    dP"  "Y8ggg,8" "8P" "8,  I8     8I          88  dP"  "Y8I  I8dP" "8I   dP"  "Y8I  ,8" "8P" "8, 
dP"  ,8P      Y8   I8   8I   8I  ,I8,  i8'    ,8I  I8   8I   8I  I8,   ,8I    gg,   88 i8'    ,8I  I8P    I8  i8'    ,8I  I8   8I   8I 
Yb,_,dP       \`8b,,dP   8I   Yb,,d88b,,d8,   ,d8' ,dP   8I   Yb,,d8b, ,d8I     "Yb,,8P,d8,   ,d8b,,d8     I8,,d8,   ,d8b,,dP   8I   Yb,
 "Y8P"         \`Y88P'   8I   \`Y88P""Y8P"Y8888P"   8P'   8I   \`Y8P""Y88P"888      "Y8P'P"Y8888P"\`Y888P     \`Y8P"Y8888P"\`Y88P'   8I   \`Y8
                                                                      ,d8I'                                                            
                                                                    ,dP'8I                                                             
                                                                   ,8"  8I                                                             
                                                                   I8   8I                                                             
                                                                   \`8, ,8I                                                             
                                                                    \`Y8P"                                                              

Type 'help' to see available commands.
Type 'sumfetch' to display summary.
Type 'cv' to view my CV.
Type 'projects' to see my interactive media projects.
`;
};
