// https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
export const copyContent = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
