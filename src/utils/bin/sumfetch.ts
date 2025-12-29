import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
sumfetch: summary display
-------------------------

Hi! My name is Antony Tahan.

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

export default sumfetch;
