type TypesOfMedia = 'video' | 'audio'

interface Media {
    name: string,
    type: TypesOfMedia,
    format: FormatsOfMedia,
    subtitles?: string,
    marks?: unknown
}

enum FormatsOfMedia {
    mp4 = '.mp4',
    mov = '.mov',
    mkv = '.mkv',
    flv = '.flv',
    webM = '.webM',
}
