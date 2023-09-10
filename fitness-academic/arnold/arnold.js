const config = [
    {
        url: `http://localhost:30112/api/programs`,
        grid:{
            table: [
                {
                    title: "شناسه",
                    slug: '_id',
                },
                {
                    title: "نوع برنامه",
                    slug: 'packageName',
                },
                {
                    title: "نام کاربر",
                    slug: 'full_name',
                },
                {
                    title: "وضعیت برنامه",
                    slug: 'status',
                    useTranslate: true
                },
                {
                    title: "تاریخ ایجاد",
                    slug: 'createdAt',
                    useJalaliFormat: true
                },
            ],
            filter: [
                {
                    title: "نوع برنامه",
                    slug: 'type',
                    type: "select",
                    options: [
                        {label: 'حرفه ای', value: '64ef8b54e632619c304525a6'},
                        {label: 'مبتدی', value: '64ef8b61e632619c304525a9'},
                    ],
                    value: "1",
                    selected: false
                },
                {
                    title: "وضعیت برنامه",
                    slug: 'status',
                    type: "select",
                    options: [
                        
                        {label: 'در انتظار پرداخت', value: 'unpaid'},
                        {label: 'تکمیل فرم', value: 'fill_info'},
                        {label: 'در حال آماده سازی', value: 'pending'},
                        {label: 'فعال', value: 'active'},
                        {label: 'منقضی شده', value: 'expired'},
                    ],
                    value: "11",
                    selected: true
                },
                {
                    title: "نام کاربر",
                    slug: 'full_name',
                    type: "text",
                    value: "333",
                    selected: false
                },
            ]
        },
        form:{

        }
    }
]

