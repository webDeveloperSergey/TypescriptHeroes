import {
  FormatsOfMedia,
  IMedia,
  PlayMediaFn,
  TypesOfMedia,
} from "./@typesMedia";
import { isMarksArr } from "./typeGuardMedia";

const media: IMedia = {
  name: "example",
  type: TypesOfMedia.AUDIO,
  format: FormatsOfMedia.MOV,
};

const checkMarksType = (marks: unknown): string => {
  if (isMarksArr(marks)) {
    return marks.join(", ");
  } else if (typeof marks === "string") {
    return marks;
  } else {
    return "Unsupported type of marks";
  }
};

const playMedia: PlayMediaFn = ({
  name,
  type,
  format,
  subtitles,
  marks,
}: IMedia = media) => {
  {
    let marksLog = checkMarksType(marks);

    console.log(`Media ${name}${format} is ${type}
      Marks: ${marksLog}
      Subtitles: ${subtitles ?? "none"}`);

    return "Media started";
  }
};

playMedia({
  name: "WoW",
  format: FormatsOfMedia.MOV,
  type: TypesOfMedia.VIDEO,
  subtitles: "hmhmhm hmhmhm doh",
  marks: ["4:30", "5:40"],
});
