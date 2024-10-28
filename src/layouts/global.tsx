/*
 * @Author: Ligen linhu.lg@alibaba-inc.com
 * @Date: 2024-10-27 22:57:04
 * @LastEditors: Ligen linhu.lg@alibaba-inc.com
 * @LastEditTime: 2024-10-28 16:30:29
 * @FilePath: /satisfaction-bookkeeping/src/layout.ts
 * @Description: Layout
 */

import { useRouter } from "next/router";
import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { useEffect, useState } from "react";
import defaultProps from "./_defaultProps";
// import style from "./global.module.scss";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [pathname, setPathname] = useState(router.pathname);
  const routerPathname = router.pathname;

  useEffect(() => {
    setPathname(routerPathname);
  }, [routerPathname]);

  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        siderWidth={216}
        bgLayoutImgList={[
          {
            src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
            left: 85,
            bottom: 100,
            height: "303px",
          },
          {
            src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
            bottom: -68,
            right: -45,
            height: "303px",
          },
          {
            src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
            bottom: 0,
            left: 0,
            width: "331px",
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          title: "七妮妮",
          size: "small",
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => {
          return (
            <div
              style={{ width: "100%" }}
              onClick={() => {
                setPathname(item.path || "/welcome");
                router.push(item.path || "/welcome");
              }}
            >
              {dom}
            </div>
          );
        }}
      >
        {children}
      </ProLayout>
    </div>
  );
}
