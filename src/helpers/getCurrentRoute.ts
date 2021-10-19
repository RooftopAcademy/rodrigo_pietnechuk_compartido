export default function getCurrentRoute(): string {
  return window.location.hash.split('/')[0];
}
