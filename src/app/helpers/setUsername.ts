export default function setUsername(name: string): void {
  const username: HTMLSpanElement = document.querySelector('span#username') as HTMLSpanElement;
  username.innerText = name;
}
