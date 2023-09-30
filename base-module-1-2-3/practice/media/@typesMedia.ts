// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
export enum TypesOfMedia {
  VIDEO = "video",
  AUDIO = "audio",
}

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
export enum FormatsOfMedia {
  MP4 = ".mp4",
  MOV = ".mov",
  MKV = "mkv",
  FLV = ".flv",
  WEBM = ".webM",
}

// Описание интерфейса IMedia
export interface IMedia {
  name: string;
  type: TypesOfMedia;
  format: FormatsOfMedia;
  subtitles?: string;
  marks?: unknown;
}

export type PlayMediaFn = ({
  name,
  type,
  format,
  subtitles,
  marks,
}: IMedia) => string;
