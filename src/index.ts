import { CsvParser } from "./CsvParser";
import { JsonParser } from "./JsonParser";
import path from "path";

const jsonFilePath = path.join(__dirname+'\\..\\'+'/data/movies.json')
const csvFilePath = path.join(__dirname+'\\..\\'+'/data/books.csv')

// console.log(jsonFilePath)

type Parser = CsvParser | JsonParser

class Data {
    public constructor(public parser:Parser){}

    static fromCSV(csvPath: string){
        return new Data(new CsvParser(csvPath))
    }

    static fromJson(jsonPath: string){
        return new Data(new JsonParser(jsonPath))
    }
}
// Parse data from csv
const csv_data = Data.fromCSV(csvFilePath)
csv_data.parser.parse()

// Parse data from json
const json_data = Data.fromJson(jsonFilePath)
json_data.parser.parse()