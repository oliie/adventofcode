import input from "./input.ts";

type Directory = {
  parent: string | null;
  subDirs: string[];
  totalSize: number;
  filesSize: number;
};

const exampleInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`.split("\n");

const fs: { [key: string]: Directory } = {};
const cd: string[] = [];

input.forEach((line) => {
  const isCD = line.startsWith("$ cd");
  const isDir = line.startsWith("dir");
  const isFile = /^[0-9]/.test(line);
  const currentDir = cd[cd.length - 1];

  if (isCD) {
    const dir = line.split(" ")[2];

    if (dir === "..") {
      cd.pop();
    } else {
      cd.push(dir);
      fs[dir] = {
        parent: currentDir || null,
        subDirs: [],
        totalSize: 0,
        filesSize: 0,
      };
    }
  }

  if (isFile) {
    const [size, _name] = line.split(" ");
    fs[currentDir].filesSize += +size;
    fs[currentDir].totalSize += +size;
  }

  if (isDir) {
    const subDir = line.split(" ")[1];
    fs[currentDir].subDirs.push(subDir);
  }
});

let sum = 0;

Object.keys(fs).forEach((dirName) => {
  const currentDir = fs[dirName];

  if (currentDir.filesSize <= 100000) {
    sum += currentDir.filesSize;
  }
});

console.log(sum);

Object.keys(fs).forEach((dirName) => {
  const currentDir = fs[dirName];

  currentDir.subDirs.forEach((name) => {
    currentDir.totalSize += fs[name].filesSize;
  });
});

const dirsMaxSize: number[] = [];

Object.keys(fs).forEach((dirName) => {
  if (fs[dirName].totalSize <= 100000) {
    dirsMaxSize.push(fs[dirName].totalSize);
  }
});

console.log(fs);
console.log(dirsMaxSize.reduce((n, current) => n + current));

// 1030718 För lågt
// 1338557 För lågt

// + 94853
// + 584
// 95437
