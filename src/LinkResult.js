import axios from "axios";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
    console.log(inputValue);
    const [shortenedLink, setShortenedLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.post(
                'https://api.tinyurl.com/create',
                { url: inputValue }, 
                {
                    headers: {
                        Authorization: 'Bearer Kpvc2ZPDQTgf7u4fl0Oxeit2FcjmDoPuaaHHWGgEmNP4fSFFcH1LplxMV6QN', 
                        'Content-Type': 'application/json'
                    }
                }
            );
            setShortenedLink(res.data.data.tiny_url);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [copied]);

    if (loading) {
        return <p className="noData">Loading...</p>;
    }
    if (error) {
        return <p className="noData">Something went wrong: {error}</p>;
    }

    return (
        <>
            {shortenedLink && (
                <div className="result">
                    <p>{shortenedLink}</p>
                    <CopyToClipboard 
                        text={shortenedLink}
                        onCopy={() => setCopied(true)}
                    >
                        <button className={copied ? "copied" : ""}>
                            Copy to clipboard
                        </button>
                    </CopyToClipboard>
                </div>
            )}
        </>
    );
}

export default LinkResult;
