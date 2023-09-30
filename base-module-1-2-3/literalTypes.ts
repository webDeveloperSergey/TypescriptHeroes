let msg: "hello" = "hello"; // Переменная имеет наш определенный тип, который мы сами ей определили 'hello'
msg = "hello";

// =========================================================================================

// Типы для работы ---------------- ↓

// Типы для описания протокола и порта (литералы)
type Protocol = "http" | "https";
type Port = 3000 | 3001;

type Role = {
  role: string;
};

// Объектный литеральный тип
type ServerConfig = {
  protocol: Protocol;
  port: Port;
};

// Intersection Types (пересечение типов)
type ConfigWithRole = Role & ServerConfig;

// Тип для описания функции
type ServerConfigFn = (protocol: Protocol, port: Port) => string;

// Типы для работы ---------------- ↑

const port3000: number = 3000;
const port3001: number = 3001;

const serverConfig: ConfigWithRole = {
  protocol: "http",
  port: 3000,
  role: "admin",
};

const backupConfig: ConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "user",
};

const startServer: ServerConfigFn = (
  protocol: "http" | "https",
  port: 3000 | 3001 // в runTime - е эти значения пропадут
): "Server started" => {
  /* 
    сравниваем значения, которые нам пришли динамически с теми, что у нас уже существуют в коде.
    Необходимо в случае, если данные к нам прилетают динамически
  */
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.log("Invalid port");
  }

  return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port);
