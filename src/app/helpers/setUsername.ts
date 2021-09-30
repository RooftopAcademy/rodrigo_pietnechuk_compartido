import getHTMLElement from './getHTMLElement';

export default function setUsername(name: string): void {
  const username: HTMLSpanElement = getHTMLElement('span#username') as HTMLSpanElement;
  username.innerText = name;
}
