import { QuestionAnswerOutlined } from "@material-ui/icons";
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-f392d/us-central1/api'
})

export default instance;