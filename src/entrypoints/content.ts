export default defineContentScript({
  matches: ["https://www.freepeople.com/*", "https://evereve.com/*"],
  main() {
    console.log('Hello content.');
  },
});
