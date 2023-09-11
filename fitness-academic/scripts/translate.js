function translate(status){
    switch (status){
        case "fill_info":
            return "تکمیل فرم";
            break;
        case "unpaid":
            return "پرداخت نشده"; 
            break;
        case "active":
            return "فعال";   
            break;
        case "pending":
            return "در حال آماده سازی"; 
            break;    
    }
}