const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
    ],

    theme: {
        extend: {
            height : {
                '98' : '396px',
                '110' : '500px'
            },
            colors: {
   
                white: "#fff",
                black: "#2B2937",
               
                bg_abu: "#999999",
                bg_biru_tua: "#1F1D2B",
                bg_abu_tua: {
                    100: "#383c46",
                    200: "#504F5E",
                },
            },
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
