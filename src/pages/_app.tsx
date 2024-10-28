/*
 * @Author: Ligen linhu.lg@alibaba-inc.com
 * @Date: 2024-10-27 23:12:43
 * @LastEditors: Ligen linhu.lg@alibaba-inc.com
 * @LastEditTime: 2024-10-28 10:42:45
 * @FilePath: /satisfaction-bookkeeping/src/pages/_app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import GlobalLayout from "../layouts/global";
import type { AppProps } from "next/app";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
