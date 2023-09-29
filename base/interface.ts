// Типы для работы ---------------- ↓

// Нейминг Венгерской нотации "IServerConfig"
interface IServerConfig {
  protocol: "http" | "https";
  port: 3000 | 3001;
  log: (msg: string) => void;
}

interface IRole {
  role: string;
}

interface IConfigWithRole extends IServerConfig, IRole {}

// Тип для описания функции
type ServerConfigFn2 = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
) => string;

// Типы для работы ---------------- ↑

const serverConfig2: IConfigWithRole = {
  protocol: "http",
  port: 3000,
  role: "admin",
  log: (msg: string) => console.log(msg),
};

const startServer2: ServerConfigFn2 = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
): "Server started" => {
  log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
};

startServer2(serverConfig2.protocol, serverConfig2.port, serverConfig2.log);

// ===================================================================================================

// Индексные св-ва
interface IStyles {
  [key: string]: string;
}
// type Styles = {
//   [key: string]: string;
// }

const styles: IStyles = {
  pos: "absolute",
  top: "20px",
  lef: "15px",
  // ... и кучу других свойств
};

// ===================================================================================================

const serverConfig3 = {
  protocol: "http",
  port: 3000,
  role: "admin",
};

const backupConfig3 = {
  protocol: "https",
  port: 3001,
  role: "user",
};

interface IBasicConfig {
  protocol: string;
  port: number;
}

const startServer3 = (config: IBasicConfig): "Server started" => {
  console.log(`Server started on ${config.protocol}://server:${config.port}`);

  return "Server started";
};

startServer3(serverConfig3);
startServer3(backupConfig3);
