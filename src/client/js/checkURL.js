const checkURL = (url) => {
    const blogUrl = url;
    let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g; 
    if (re.test(blogUrl)) {
        return true;
    } else {
        return false;
    }
};

export default checkURL;