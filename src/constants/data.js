import { format } from "date-fns/esm";
import images from "./images";

const menuItems = [
    {
        text: "Основные сведения",
        link: "f65d1c89-4bc0-4ac8-829b-7fa52807497e",
    },
    {
        text: "Структура и органы управления образовательной организацией",
        link: "f65d1c89-4bc0-4ac8-829b-7fa52807497",
    },
    {
        text: "Документы",
        link: "f65d1c89-4bc0-4ac8-829b-7fa5280749",
    },
    {
        text: "Образование",
        link: "f65d1c89-4bc0-4ac8-829b-7fa528074",
    },
    {
        text: "Руководство",
        link: "f65d1c89-4bc0-4ac8-829b-7fa52807",
    },
    {
        text: "Персональный состав педагогических работников",
        link: "f65d1c89-4bc0-4ac8-829b-7fa5280",
    },
    {
        text: "Материально-техническое обеспечение и оснащенность образовательного процесса",
        link: "f65d1c89-4bc0-4ac8-829b-7fa528",
    },
    {
        text: "Стипендии и иные виды материальной поддержки",
        link: "f65d1c89-4bc0-4ac8-829b-7fa52",
    },
    {
        text: "Финансово-хозяйственная деятельность",
        link: "f65d1c89-4bc0-4ac8-829b-7fa5",
    },
    {
        text: "Вакантные места для приема (перевода)",
        link: "f65d1c89-4bc0-4ac8-829b-7fa",
    },
    {
        text: "Сотрудники",
        link: "f65d1c89-4bc0-4ac8-829b-7f",
    },
    {
        text: "Об Учебном комбинате",
        link: "f65d1c89-4bc0-4ac8-829b-7",
    },
    {
        text: "Партнеры",
        link: "f65d1c89-4bc0-4ac8-829b",
    },
    {
        text: "Отзывы",
        link: "f65d1c89-4bc0-4ac8-829",
    },
    {
        text: "Реквизиты",
        link: "f65d1c89-4bc0-4ac8-82",
    },
    {
        text: "Отчеты АО «Учебный комбинат»",
        link: "f65d1c89-4bc0-4ac8-8",
    },
];

//========================================================================================================================================================

const { contentIcons } = images;
const docItems = [
    {
        id: "5a669f71-4520-46a0-b0a5-5cb6cf5c32e6",
        link: "5a669f71-4520-46a0-b0a5-5cb6cf5c32e6",
        icon: contentIcons.fireman,
        text: "Гражданская оборона и ЧС",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5cb6cf5c32e",
        link: "5a669f71-4520-46a0-b0a5-5cb6cf5c32e",
        icon: contentIcons.crane,
        text: "Работы на высоте",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5cb6cf5c32",
        link: "5a669f71-4520-46a0-b0a5-5cb6cf5c32",
        icon: contentIcons.excavator,
        text: "Дорожно-строительная техника",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5cb6cf5c3",
        link: "5a669f71-4520-46a0-b0a5-5cb6cf5c3",
        icon: contentIcons.settings,
        text: "Неразрушающий контроль",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5cb6cf5c",
        link: "5a669f71-4520-46a0-b0a5-5cb6cf5c",
        icon: contentIcons.toxicWaste,
        text: "Опасные грузы (ДОПОГ)",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5cb6cf5",
        link: "5a669f71-4520-46a0-b0a5-5cb6cf5",
        icon: contentIcons.worker,
        text: "Охрана труда",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5cb6cf",
        link: "5a669f71-4520-46a0-b0a5-5cb6cf",
        icon: contentIcons.fireExtinguisher,
        text: "Пожарно-технический минимум",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5cb6c",
        link: "5a669f71-4520-46a0-b0a5-5cb6c",
        icon: contentIcons.factory,
        text: "Промышленная безопасность",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5cb6",
        link: "5a669f71-4520-46a0-b0a5-5cb6",
        icon: contentIcons.engineer,
        text: "Обучение по рабочим профессиям",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5cb",
        link: "5a669f71-4520-46a0-b0a5-5cb",
        icon: contentIcons.plug,
        text: "Энергетическая безопасность",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5c",
        link: "5a669f71-4520-46a0-b0a5-5c",
        icon: contentIcons.curve,
        text: "Безопасность дорожного движения",
    },
    {
        id: "5a669f71-4520-46a0-b0a5-5",
        link: "5a669f71-4520-46a0-b0a5-5",
        icon: contentIcons.tracktor,
        text: "Права на спецтехнику",
    },
];

const garantyItems = [
    {
        id: "9cc49dd9-4314-45e3-b976-d8ebf630bbd7",
        icon: contentIcons.Shape,
        title: "Документы в срок",
        text: "Мы четко соблюдаем сроки, так как дорожим вашим временем",
    },
    {
        id: "9cc49dd9-4314-45e3-b976-d8ebf630bbd",
        icon: contentIcons.favorites,
        title: "100% качество наших услуг",
        text: "Мы несем полную ответственность за свою работу",
    },
    {
        id: "9cc49dd9-4314-45e3-b976-d8ebf630bb",
        icon: contentIcons.file,
        title: "Гарантия подлинности документов",
        text: "У нас есть все необходимые лицензии и сертификаты",
    },
    {
        id: "9cc49dd9-4314-45e3-b976-d8ebf630",
        icon: contentIcons.deliveryTruck,
        title: "Гарантия быстрой доставки по всей России.",
        text: "Доставляем в любой город России",
    },
];

//========================================================================================================================================================

const { newsImages } = images;
const educationItems = [
    {
        id: "49364305-a485-4c93-aa37-3e3812f2c70c",
        link: "49364305-a485-4c93-aa37-3e3812f2c70c",
        access: true,
        image: newsImages.news01,
        title: "Пожарно-технический минимум (учреждения-офисы, организации)",
        price: "2500",
    },
    {
        id: "49364305-a485-4c93-aa37-3e3812f2c70",
        link: "49364305-a485-4c93-aa37-3e3812f2c70",
        access: true,
        image: newsImages.news02,
        title: "Организации",
        price: "3500",
    },
    {
        id: "49364305-a485-4c93-aa37-3e3812f2c7",
        link: "49364305-a485-4c93-aa37-3e3812f2c7",
        access: true,
        image: newsImages.news03,
        title: "Учреждения-офисы, организации",
        price: "4500",
    },
    {
        id: "49364305-a485-4c93-aa37-3e3812f2c",
        link: "49364305-a485-4c93-aa37-3e3812f2c",
        access: true,
        image: newsImages.news04,
        title: "Пожарно-технический максимум",
        price: "1500",
    },
    {
        id: "49364305-a485-4c93-aa37-3e3812f2",
        link: "49364305-a485-4c93-aa37-3e3812f2",
        access: false,
        image: newsImages.news05,
        title: "Пожарно-технический минимум ",
        price: "2500",
    },
    {
        id: "49364305-a485-4c93-aa37-3e3812f",
        link: "49364305-a485-4c93-aa37-3e3812f",
        access: true,
        image: newsImages.news06,
        title: "Пожарно-технический минимум (организации)",
        price: "2500",
    },
    {
        id: "49364305-a485-4c93-aa37-3e3812",
        link: "49364305-a485-4c93-aa37-3e3812",
        access: false,
        image: newsImages.news07,
        title: "Пожарно-технический минимум (учреждения, организации)",
        price: "4500",
    },
    {
        id: "49364305-a485-4c93-aa37-3e381",
        link: "49364305-a485-4c93-aa37-3e381",
        access: true,
        image: newsImages.news08,
        title: "Пожарно-технический минимум (учреждения-офисы)",
        price: "2000",
    },
    {
        id: "49364305-a485-4c93-aa37-3e38",
        link: "49364305-a485-4c93-aa37-3e38",
        access: false,
        image: newsImages.news01,
        title: "Пожарно-технический (учреждения-офисы, организации)",
        price: "5000",
    },
];

const newsItems = [
    {
        id: "d7bfea71-6c5f-44be-8d0b-1aa9f55f0083",
        link: "d7bfea71-6c5f-44be-8d0b-1aa9f55f0083",
        image: newsImages.news01,
        date: format(new Date(2019, 3, 2), "MM.dd.yyyy"),
        title: "Изменения в системе гражданской обороны",
        text: "Государство планирует реализовать значительные улучшения в сфере Государство планирует реализовать значительные улучшения в сфер Государство планирует реализовать значительные улучшения в сфере…",
    },
    {
        id: "d7bfea71-6c5f-44be-8d0b-1aa9f55f008",
        link: "d7bfea71-6c5f-44be-8d0b-1aa9f55f008",
        image: newsImages.news02,
        date: format(new Date(2019, 2, 2), "MM.dd.yyyy"),
        title: "Изменения в системе гражданской",
        text: "Не следует, однако забывать, что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке соответствующий условий активизации. Равным образом дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. ",
    },
    {
        id: "d7bfea71-6c5f-44be-8d0b-1aa9f55f00",
        link: "d7bfea71-6c5f-44be-8d0b-1aa9f55f00",
        image: newsImages.news03,
        date: format(new Date(2019, 1, 2), "MM.dd.yyyy"),
        title: "Изменения в обороны",
        text: "Задача организации, в особенности же консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития.",
    },
    {
        id: "d7bfea71-6c5f-44be-8d0b-1aa9f55f0",
        link: "d7bfea71-6c5f-44be-8d0b-1aa9f55f0",
        image: newsImages.news04,
        date: format(new Date(2021, 3, 12), "MM.dd.yyyy"),
        title: "В системе гражданской обороны",
        text: "Задача организации, в особенности же начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. ",
    },
    {
        id: "d7bfea71-6c5f-44be-8d0b-1aa9f55f",
        link: "d7bfea71-6c5f-44be-8d0b-1aa9f55f",
        image: newsImages.news05,
        date: format(new Date(2022, 3, 4), "MM.dd.yyyy"),
        title: "Изменения в гражданской обороны",
        text: "Таким образом новая модель организационной деятельности требуют определения и уточнения дальнейших направлений развития. ",
    },
    {
        id: "d7bfea71-6c5f-44be-8d0b-1aa9f55",
        link: "d7bfea71-6c5f-44be-8d0b-1aa9f55",
        image: newsImages.news06,
        date: format(new Date(2021, 3, 4), "MM.dd.yyyy"),
        title: "Изменения в системе гражданской обороны",
        text: "Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке модели развития.",
    },
    {
        id: "d7bfea71-6c5f-44be-8d0b-1aa9f5",
        link: "d7bfea71-6c5f-44be-8d0b-1aa9f5",
        image: newsImages.news07,
        date: format(new Date(2022, 2, 4), "MM.dd.yyyy"),
        title: "Изменения в системе обороны",
        text: "Государство планирует реализовать значительные улучшения в сфере…Государство планирует реализовать значительные улучшения в сфер Государство планирует реализовать значительные улучшения в сфере…",
    },
    {
        id: "d7bfea71-6c5f-44be-8d0b-1aa9f5",
        link: "d7bfea71-6c5f-44be-8d0b-1aa9f5",
        image: newsImages.news08,
        date: format(new Date(2021, 3, 10), "MM.dd.yyyy"),
        title: "Изменения в системе гражданской",
        text: "Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке модели развития.",
    },
];

//========================================================================================================================================================

const { docsImages } = images;
const exampleSlider = [
    {
        image: docsImages.docs01,
        alt: "Гражданская оборона и ЧС",
    },
    {
        image: docsImages.docs02,
        alt: "(ДОПОГ)",
    },
    {
        image: docsImages.docs03,
        alt: "Охрана труда",
    },
    {
        image: docsImages.docs04,
        alt: "Обучение по рабочим профессиям",
    },
];

export default { menuItems, garantyItems, docItems, educationItems, exampleSlider, newsItems };
