import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

interface LayoutI {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutI) {
  return (
    <>
      <Head>
        <title>Resumint</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="flex min-h-screen">{children}</div>
    </>
  );
}

function Navbar() {
  const { data } = useSession();
  const { push } = useRouter();

  if (!data) {
    return null;
  }

  return (
    <div className="flex w-full  flex-col items-center  border-b border-b-slate-100 bg-white px-5 py-4 max-md:max-w-full">
      <div className="mx-auto flex w-full max-w-screen-xl gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="118"
            height="18"
            fill="none"
          >
            <path
              fill="#0FA958"
              d="M16.332 1.256v1.72c0 8.274-4.875 12.033-10.887 12.033H3.719c.192-2.589 1.043-4.156 3.264-6.017 1.093-.916 1-1.444.462-1.141-3.705 2.089-5.546 4.911-5.628 9.42l-.002.317H0c0-1.172.105-2.235.314-3.208C.105 13.268 0 11.758 0 9.852c0-4.747 4.062-8.596 9.073-8.596 1.814 0 3.63.86 7.259 0Z"
            />
            <path
              fill="#020817"
              fillRule="evenodd"
              d="M24.837 1.15v15.272h2.767v-5.593h2.815l3 5.593h3.088l-3.303-6.046c.1-.04.196-.083.29-.129.806-.392 1.415-.947 1.827-1.662.418-.721.627-1.571.627-2.55 0-.975-.207-1.827-.62-2.558-.407-.736-1.01-1.308-1.811-1.715-.796-.408-1.78-.612-2.953-.612h-5.727Zm5.69 9.679c1.035 0 1.928-.151 2.677-.453l-.478-.874h-3.02l.713 1.327h.108Zm-2.923-2.297h2.55c.686 0 1.247-.094 1.685-.283.437-.194.76-.475.97-.843.213-.372.32-.83.32-1.372 0-.541-.107-1.004-.32-1.387a2.04 2.04 0 0 0-.977-.88c-.438-.203-1.002-.305-1.693-.305h-2.535v5.07Zm12.702 7.397c.835.478 1.827.716 2.975.716.89 0 1.68-.134 2.372-.402.69-.274 1.257-.657 1.7-1.149a3.93 3.93 0 0 0 .91-1.745l-2.521-.283a2.08 2.08 0 0 1-.53.813c-.233.219-.509.385-.827.5-.318.109-.674.163-1.066.163-.587 0-1.1-.124-1.537-.372a2.607 2.607 0 0 1-1.021-1.089c-.236-.461-.357-1.01-.365-1.648h7.978v-.828c0-1.004-.139-1.869-.418-2.595-.278-.73-.66-1.332-1.148-1.804a4.518 4.518 0 0 0-1.67-1.044 5.78 5.78 0 0 0-1.998-.343c-1.094 0-2.046.251-2.856.753-.81.497-1.442 1.193-1.894 2.088-.448.89-.671 1.924-.671 3.102 0 1.198.223 2.24.67 3.124a4.848 4.848 0 0 0 1.917 2.043Zm.095-6.315c.026-.45.14-.864.345-1.246.234-.432.56-.78.977-1.044.417-.268.902-.402 1.454-.402.517 0 .97.117 1.357.35.393.234.698.554.917.962.219.403.33.863.336 1.38H40.4Zm16.848-1.35 2.461-.268c-.184-.975-.664-1.748-1.44-2.32-.77-.571-1.826-.857-3.168-.857-.915 0-1.723.144-2.423.432-.697.284-1.24.686-1.634 1.208-.387.517-.579 1.129-.574 1.835-.005.835.256 1.526.783 2.073.527.542 1.34.927 2.439 1.155l1.953.41c.527.115.915.279 1.163.493.254.213.38.484.38.813 0 .387-.196.713-.588.976-.388.264-.903.396-1.544.396-.621 0-1.126-.132-1.514-.396-.387-.263-.64-.653-.76-1.17l-2.632.253c.164 1.054.673 1.877 1.528 2.468.855.587 1.984.88 3.386.88.954 0 1.8-.154 2.535-.462.736-.308 1.31-.736 1.722-1.283a3.113 3.113 0 0 0 .634-1.909c-.005-.82-.273-1.483-.805-1.99-.527-.508-1.333-.878-2.416-1.111l-1.954-.418c-.581-.134-.999-.306-1.252-.515a.99.99 0 0 1-.366-.812c-.005-.388.182-.704.56-.947.382-.244.854-.366 1.416-.366.418 0 .77.067 1.059.202.288.134.517.31.686.529.174.219.296.452.365.7Zm12.233-3.296v6.636c0 .582-.122 1.067-.365 1.455a2.352 2.352 0 0 1-.918.865c-.372.194-.758.29-1.155.29-.647 0-1.169-.213-1.566-.641-.398-.427-.597-1.004-.597-1.73V4.968h-2.699v7.293c0 .914.161 1.695.485 2.341.323.641.77 1.131 1.342 1.47.576.332 1.24.499 1.99.499.86 0 1.584-.204 2.17-.612a3.444 3.444 0 0 0 1.276-1.573h.119v2.036h2.617V4.968h-2.699Zm5.475 0v11.454h2.7V9.457c0-.472.094-.885.283-1.238.189-.358.442-.634.76-.827a1.958 1.958 0 0 1 1.06-.299c.57 0 1.033.177 1.386.53.358.353.537.825.537 1.416v7.383h2.647V9.278c0-.646.181-1.17.544-1.573.368-.408.878-.612 1.529-.612.547 0 1.01.167 1.387.5.378.328.567.847.567 1.558v7.27h2.706V8.735c0-1.278-.333-2.25-.999-2.916-.666-.666-1.526-.999-2.58-.999-.83 0-1.548.191-2.155.574a3.131 3.131 0 0 0-1.282 1.521h-.12a2.963 2.963 0 0 0-1.133-1.528c-.532-.378-1.186-.567-1.961-.567-.766 0-1.424.186-1.976.56-.552.367-.947.88-1.186 1.535h-.134V4.968h-2.58Zm18.845 0v11.454h2.7V4.968h-2.7Zm.253-2.05c.309.283.676.425 1.104.425.432 0 .8-.142 1.103-.425a1.37 1.37 0 0 0 .463-1.037c0-.408-.154-.753-.462-1.036a1.543 1.543 0 0 0-1.104-.433 1.56 1.56 0 0 0-1.104.433 1.355 1.355 0 0 0-.462 1.036c0 .403.154.748.462 1.037Zm7.921 13.504V9.71c0-.552.102-1.022.306-1.41.209-.388.495-.683.857-.887A2.51 2.51 0 0 1 104.4 7.1c.696 0 1.24.216 1.633.648.397.433.596 1.032.596 1.797v6.876h2.699V9.129c.005-.915-.156-1.693-.484-2.334a3.418 3.418 0 0 0-1.372-1.469c-.587-.338-1.275-.507-2.066-.507-.855 0-1.573.189-2.155.567a3.274 3.274 0 0 0-1.26 1.528h-.134V4.968h-2.58v11.454h2.699Zm15.815-9.366V4.968h-2.259V2.224h-2.699v2.744h-1.625v2.088h1.625v6.368c-.005.716.149 1.312.462 1.79.319.477.749.83 1.29 1.058.542.224 1.151.326 1.827.306a5.07 5.07 0 0 0 .97-.104c.268-.06.475-.115.618-.164l-.455-2.11c-.073.02-.183.042-.328.067a2.629 2.629 0 0 1-.462.037c-.223 0-.427-.035-.611-.104a.89.89 0 0 1-.448-.388c-.109-.194-.164-.473-.164-.835V7.056h2.259Z"
              clipRule="evenodd"
            />
            <path
              fill="#020817"
              d="M32.726 9.502h-3.02l.713 1.327h.108c1.035 0 1.928-.151 2.677-.453l-.478-.874Z"
            />
          </svg>
        </Link>
        <ul className="flex grow gap-5 border-l border-l-slate-100 px-8 py-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <li className="text-sm font-medium leading-5 text-slate-700">Home</li>
          <li className="text-sm font-medium leading-5 text-green-600">
            Dashboard
          </li>
          <li className="whitespace-nowrap text-sm font-medium leading-5 text-slate-700">
            Templates
          </li>
        </ul>
        <div className="ml-auto flex flex-shrink-0 items-center gap-3">
          {data?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className=" flex items-center space-x-2 rounded   px-2 py-1 hover:bg-slate-50">
                  {data.user.image ? (
                    <Image
                      src={data.user.image ?? "/"}
                      alt="pic"
                      className="rounded-full border border-slate-500"
                      width={30}
                      height={30}
                    />
                  ) : null}
                  {/* <p className="text-xs">{data.user.name}</p> */}
                  <MdOutlineKeyboardArrowDown size={20} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    void push("/resumes");
                  }}
                >
                  My resumes
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    void signOut();
                  }}
                  className="!hover:bg-red-50 !hover:text-red-600 text-red-500"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
}
