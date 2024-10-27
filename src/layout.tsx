/*
 * @Author: Ligen linhu.lg@alibaba-inc.com
 * @Date: 2024-10-27 22:57:04
 * @LastEditors: Ligen linhu.lg@alibaba-inc.com
 * @LastEditTime: 2024-10-27 22:59:27
 * @FilePath: /satisfaction-bookkeeping/src/layout.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span>111</span>
      {children}
    </div>
  );
}
