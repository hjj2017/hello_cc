@echo off

rd /s/q out
md out

protoc.exe --java_out=.\out .\GameMsgProtocol.proto

set "_pbjs=node D:\Bin\nodejs\default\node_modules\protobufjs\bin\pbjs"
set "_pbts=node D:\Bin\nodejs\default\node_modules\protobufjs\bin\pbts"

%_pbjs% -t static-module -w commonjs --es6 --keep-case -o .\out\GameMsgProtocol.js .\GameMsgProtocol.proto
%_pbts% -o .\out\GameMsgProtocol.d.ts .\out\GameMsgProtocol.js
