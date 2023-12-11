import React from "react";


function Footer() {

    return (

        <>
            <footer className="footer card rounded-none mt-auto bg-white total-revenue">
                <div className="h-16 flex items-center px-8 rounded-none">
                    <div className="flex md:justify-between justify-center w-full gap-4">
                        <div>
                            <script>document.write(new Date().getFullYear())</script> © Adminto - <a
                                href="https://coderthemes.com/" target="_blank">Coderthemes</a>
                        </div>
                        <div className="md:flex hidden gap-4 item-center md:justify-end">
                            <a href="#"
                                className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">About</a>
                            <a href="#"
                                className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Help</a>
                            <a href="#"
                                className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Contact
                                Us</a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;