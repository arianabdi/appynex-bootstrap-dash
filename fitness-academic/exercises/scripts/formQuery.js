const heading = {
    title: "ایجاد تمرین جدید",
    description: "در بخش باید متناسب با اطلاعات وارد شده توسط کاربر، برنامه تمرینی و غذایی ایجاد و ثبت شوددر بخش باید متناسب با اطلاعات وارد شده توسط کاربر، برنامه تمرینی و غذایی ایجاد و ثبت شوددر بخش باید متناسب با اطلاعات وارد شده توسط کاربر، برنامه تمرینی و غذایی ایجاد و ثبت شود"
}


let formItems = [
    [

        {
            title: "عنوان تمرین",
            slug: 'name',
            type: "text",
            regex: /^[A-Za-z\u0600-\u06FF\s]+$/,
            alert: 'Title should contain only letters and spaces with no underline or numbers.',
            value: "",
        },
        
        {
            title: "شناسه تمرین",
            slug: 'slug',
            type: "text",
            regex: /^[A-Za-z0-9_]+$/,
            alert: 'Slug should contain only letters, numbers, and underscores.',
            value: "",
        },
    ],
    [

        {
            title: "سطح تمرین",
            slug: 'level',
            type: "select",
            options: [
                {label: 'مبتدی', value: 'beginner'},
                {label: 'حرفه ای', value: 'professional'},
            ],
            value: "",
        },
        {
            title: "دسته بندی تمرین",
            slug: 'categoryId',
            type: "select",
            options: [
                {label: 'بازو', value: '6489c0bae32a24bcc407357f'},
                {label: 'پا', value: '6489c0dfe32a24bcc4073587'},
                {label: 'کمربند شانه ای', value: '64ac3caca19a70a65c8f4487'},
                {label: 'عضلات زیربغل', value: '64ac3cd2a19a70a65c8f4491'},
                {label: 'عضلات سینه ای', value: '64ac3c65a19a70a65c8f447d'},
                {label: 'عضلات چهار سر رانی و همسترینگ', value: '64ac3cf7a19a70a65c8f449b'},
                {label: 'عضلات شکمی', value: '64ac3d35a19a70a65c8f44a5'},
                {label: 'پا', value: '6489c0dfe32a24bcc4073587'},
            ],
            value: "",
        },
        
    ],
    [
        {
            title: "توضیحات",
            slug: 'description',
            type: "textarea",
            value: "",
        },
    ],
    [
        {
            title: "عکس تمرین",
            slug: 'image',
            type: "image",
            value: "",
        },
    ],
    [
        {
            title: "ویدیو تمرین",
            slug: 'video',
            type: "video",
            value: "",
        },
    ]
]


