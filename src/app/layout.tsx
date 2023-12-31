"use client";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import "./globals.css";
import { Inter } from "next/font/google";
import { Layout } from "antd";
import { Header } from "@/components/Header";
import { BaseMenu } from "@/components/Menu";
import { getMenus } from "@/config/router";
import { APP_ENV } from "@/utils";
import styles from "@/style/layout.module.scss";
import withTheme from "../../theme";

const inter = Inter({ subsets: ["latin"] });

const menus = getMenus();

const { Sider, Content } = Layout;

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Layout style={{ minHeight: "100vh" }} hasSider>
            <Sider
              collapsible={false}
              style={{
                overflow: "auto",
                height: "100vh",
              }}
              width="280"
            >
              <div className={styles.logo}>
                <div className={styles.text}>
                  <span style={{ fontSize: "28px" }}>Admin</span>
                  <span
                    style={{
                      fontSize: "28px",
                      color: APP_ENV === "live" ? "red" : "white",
                    }}
                  >
                    {APP_ENV?.toUpperCase()}
                  </span>
                </div>
              </div>
              <BaseMenu menu={menus} theme="dark" mode="inline" />
            </Sider>
            <Layout>
              <Header user={{ name: "admin user" }} />
              <Content className={styles.content}>{children}</Content>
            </Layout>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}


export default RootLayout;