import Input from "./components/Input";
import "./App.css";
import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import RenderImage from "./components/RenderImage";
import Data from "./data.type";

function App() {
  const [openai, setOpenAI] = useState<OpenAIApi | null>(null);
  const [imageUrls, setImageURLs] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadOpenAI = async () => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    if (openai) setOpenAI(openai);
    else console.log("Connection error");
  };

  const generateImage = async (prompt: string) => {
    const results: any = await openai?.createImage({
      prompt: prompt,
      n: 1,
      response_format: "url",
      size: "1024x1024",
    });

    const { data } = results.data;
    data as Data[];

    if (data) setImageURLs(data);
    setLoading(false);
  };

  useEffect(() => {
    loadOpenAI().catch(console.error);
  }, []);

  return (
    <div>
      <h1 className="heading" style={{ textDecoration: "underline" }}>
        Welcome to Text to image generator!
      </h1>
      <Input generateImage={generateImage} setLoading={setLoading} setImageURLs={setImageURLs} />

      <RenderImage imageUrls={imageUrls} loading={loading} />

      <footer style={{ height: "10vh" }}></footer>
    </div>
  );
}

export default App;

/* 
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-Z8IctFZ6sJ8NCSI9AqspF7Si/user-haeQSr4z5RT6slUAblfMkcrs/img-CU2jPVxxO7Q79lN1QfosRjrN.png?st=2023-02-08T22%3A03%3A11Z&se=2023-02-09T00%3A03%3A11Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-08T21%3A57%3A30Z&ske=2023-02-09T21%3A57%3A30Z&sks=b&skv=2021-08-06&sig=nrSPEAbQgm6%2BqN6EMyoan2KrnUNaeFAPBwqXew%2B4jcM%3D
*/
