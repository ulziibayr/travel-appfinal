import React from "react";

import { Tabs, Tab, Input, Button, Card, CardBody } from "@nextui-org/react";

export default function SearchPage() {
    const [selected, setSelected] = React.useState("login");

    return (
        <div className="flex flex-col w-full relative">
            <Card className="max-w-full w-[1200px] h-[200px]">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab key="hotel" title="Зочид буудал">
                            <form className="flex flex-col gap-4">
                                <div className="flex flex-row">
                                <Input isRequired label="Нэр" placeholder="Нэрээ оруулна уу..." type="name" />
                                <Input
                                    isRequired
                                    label="Үнэ"
                                    placeholder="Үнэ оруулна уу..."
                                    type="price"
                                />
                                <div className="">
                                    <Button fullWidth color="primary">
                                    Хайх
                                    </Button>
                                </div>
                                </div>
                                
                            </form>
                        </Tab>
                        <Tab key="page1" title="Хөтөч">
                        <form className="flex flex-col gap-4">
                                <div className="flex flex-row">
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <div className="">
                                    <Button fullWidth color="primary">
                                    Хайх
                                    </Button>
                                </div>
                                </div>
                                
                            </form>
                        </Tab>
                        <Tab key="page2" title="Компани">
                        <form className="flex flex-col gap-4">
                                <div className="flex flex-row">
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <div className="">
                                    <Button fullWidth color="primary">
                                    Хайх
                                    </Button>
                                </div>
                                </div>
                                
                            </form>
                        </Tab>
                        <Tab key="page3" title="Дэлгүүр">
                        <form className="flex flex-col gap-4">
                                <div className="flex flex-row">
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <div className="">
                                    <Button fullWidth color="primary">
                                    Хайх
                                    </Button>
                                </div>
                                </div>
                                
                            </form>
                        </Tab>
                        <Tab key="page4" title="Аялал">
                        <form className="flex flex-col gap-4">
                                <div className="flex flex-row">
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <div className="">
                                    <Button fullWidth color="primary">
                                    Хайх
                                    </Button>
                                </div>
                                </div>
                                
                            </form>
                        </Tab>
                        <Tab key="page5" title="Жолооч">
                        <form className="flex flex-col gap-4">
                                <div className="flex flex-row">
                                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <div className="">
                                    <Button fullWidth color="primary">
                                    Хайх
                                    </Button>
                                </div>
                                </div>
                                
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}