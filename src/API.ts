export enum Difficulty{
    EASY="easy" ,
    MEDIUM="medium",
    HARD="hard" ,
}
export const fetchQuizQuestions = async(amount:number, difficulty:Difficulty) => {
    const endpoint = 'https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${multiple}'
    const data = await (await fetch(endpoint)).json; // this will await to fetch the data and then await to convert it to json
    console.log(data);

}