import { defineConfig } from "vite"

export default defineConfig( ( {command , mode , isSsrBuild}) => {
    console.log(command , mode , isSsrBuild)
    if(mode === "development"){
        return {
            base: "/vite"
        }
    }
    if(mode === "production") {
        return {
            base: "/prod/vite"
        }
    }
    return {};
})