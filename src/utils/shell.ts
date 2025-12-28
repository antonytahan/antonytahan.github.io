import React from 'react';
import * as bin from './bin';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();

  // Clear the command input immediately
  setCommand('');

  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    setHistory(
      `shell: command not found: ${args[0]}. Try 'help' to get started.`,
    );
  } else {
    // Show loading indicator for async commands
    const asyncCommands = ['weather', 'quote', 'readme', 'github_projects'];
    if (asyncCommands.includes(args[0])) {
      setHistory('Loading...');
    }

    const output = await bin[args[0]](args.slice(1));
    setHistory(output);
  }
};
