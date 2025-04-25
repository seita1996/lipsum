import { LaunchProps } from "@raycast/api";
import { showHUD, Clipboard } from "@raycast/api";
import { safeNumberArg } from "./utils";

export default async function main(props: LaunchProps<{ arguments: { numberOfChars: string } }>) {
  const { numberOfChars } = props.arguments;
  const safeNumberOfChars = safeNumberArg(numberOfChars);
  const dummyText = generateJapaneseDummyText(safeNumberOfChars);
  await Clipboard.copy(dummyText);
  await showHUD("Copied dummy text to clipboard");
}

const generateJapaneseDummyText = (numberOfChars: number): string => {
  const chars = [
    'あ', 'い', 'う', 'え', 'お',
    'か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の',
    'は', 'ひ', 'ふ', 'へ', 'ほ',
    'ま', 'み', 'む', 'め', 'も',
    'や', 'ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'を', 'ん',
    'が', 'ぎ', 'ぐ', 'げ', 'ご',
    'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
    'だ', 'ぢ', 'づ', 'で', 'ど',
    'ば', 'び', 'ぶ', 'べ', 'ぼ',
    'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
    '、', '。', '　'
  ];

  return Array.from({ length: numberOfChars }, () => {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
  }
  ).join('');
}
