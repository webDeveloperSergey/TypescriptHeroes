
// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа

const media: Media = {
	name: "WoW",
	format: FormatsOfMedia.mp4,
	type: 'audio',
	subtitles: "hmhmhm hmhmhm doh",
	marks: ["4:30", "5:40"],
}

function playMedia(
	{ name, type, format, subtitles, marks }: Media ): string {
	let marksLog: string;

    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!

    if(typeof marks === 'string'){
        marksLog = marks
    }else if(Array.isArray(marks)){
        marksLog = marks.join(', ')
    }else{
        marksLog = "Unsupported type of marks"
    }

	console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
    // помните что это за оператор ??

	return "Media started";
}

playMedia(media);
