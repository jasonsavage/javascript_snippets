

function getTypeFromExt( ext )
{
    switch( ext )
    {
        case 'jpg' :
        case 'gif' :
        case 'png' :
        case 'jpeg' :
        case 'bmp' :
            return 'image';
        
        case 'mpeg' :
        case 'mpg' :
        case 'wmv' :
        case '3gp' :
        case 'avi' :
        case 'mov' :
        case 'mp4' :
        case 'm4v' :
        case 'flv' :
        case 'f4v' :
        case 'mkv' : 
        case 'webm' :
        case "ts" :
            return 'video';   
    }
    //default text
    return 'text';
}