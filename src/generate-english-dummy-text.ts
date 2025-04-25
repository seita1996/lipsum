import { LaunchProps } from "@raycast/api";
import { showHUD, Clipboard } from "@raycast/api";
import { safeNumberArg } from "./utils";

export default async function main(props: LaunchProps<{ arguments: { numberOfChars: string } }>) {
  const { numberOfChars } = props.arguments;
  const safeNumberOfChars = safeNumberArg(numberOfChars);
  const dummyText = generateEnglishDummyText(safeNumberOfChars);
  await Clipboard.copy(dummyText);
  await showHUD("Copied dummy text to clipboard");
}

const generateEnglishDummyText = (numberOfChars: number): string => {
  const chars = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z', '.', ',', '?', ' ',
  ];

  return Array.from({ length: numberOfChars }, () => {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
  }
  ).join('');
}
