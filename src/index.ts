import sslChecker from "ssl-checker";
import chalk from "chalk";
import config from "../config";
import { Slack } from "./slack";

namespace SSL {
    export interface ResolvedValues {
        daysRemaining: number;
        valid: boolean;
        validFrom: string;
        validTo: string;
        validFor: string[];
    }
}

namespace EntryPoint {
    export class App {
        printExpireDay(data: SSL.ResolvedValues) {
            const hostname = data.validFor[0];
            const day = +data.daysRemaining;

            console.log(
                `${chalk.blue(hostname)}${chalk.reset()} ${chalk.yellow(
                    day
                )}${chalk.reset()}일이 남음`
            );
            if (day < 30 && config.alertToSlack) {
                Slack.send(hostname, day.toString());
            }
        }
        async getCertificate() {
            config.hostname.forEach(async (hostname) => {
                this.printExpireDay(
                    await sslChecker(hostname, { method: "GET", port: 443 })
                );
            });

            return null;
        }
    }
}

async function main() {
    const app = new EntryPoint.App();
    await app.getCertificate();
}

Promise.resolve(main());
