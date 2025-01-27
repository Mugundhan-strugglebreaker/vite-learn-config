import { defineConfig, loadEnv } from "vite"

export default defineConfig( ( {command , mode , isSsrBuild}) => {
    console.log(command , mode , isSsrBuild)
    // if(mode === "development"){
    //     return {
    //         base: "/vite"
    //     }
    // }
    // if(mode === "production") {
    //     return {
    //         base: "/prod/vite"
    //     }
    // }
    
    
    /*
    // mode , current working directory and prefix 

    const env = loadEnv(mode , process.cwd(), "VITE_")

    console.log(env)
    */

   

    return {
        clearScreen: false,
        envPrefix: "APP_"
    };
})