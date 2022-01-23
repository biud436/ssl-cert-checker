import axios from "axios";

/**
 * Basic Information -> Add features and functionality -> Incoming Webhooks
 * https://api.slack.com/apps?new_app=1
 */
const WEBHOOK_URL =
    "https://hooks.slack.com/services/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";

export namespace Slack {
    export async function send(hostname: string, date: string): Promise<void> {
        const contents: string = `${hostname}이 ${date}일 남았습니다.`;

        await axios.post(WEBHOOK_URL, {
            text: contents,
        });
    }
    export async function sendNormal(contents: string): Promise<void> {
        await axios.post(WEBHOOK_URL, {
            text: contents,
        });
    }
}
