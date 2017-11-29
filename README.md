# my-frist-native-
1.安装java sdk 

2.安装 nodejs 

  版本6.0~7.0最佳
  
  
3.安装 python 

  版本2.7最佳 
  
  下载地址[python](http://www.python.org/download)
  
4.下载并安装 Android Studio(AS) 

  版本2.2.0.12
  
5.命令行安装如下库 

  npm i -g react-native-cli
  
  npm i -g react-native
  
## 环境变量配置

1.新增环境变量

  新建 ANDROID_HOME
  
  路径：用户主目录下/Appdata/localAndroid/sdk
  
2.path下新增路径

  路径：用户主目录下/Appdata/localAndroid/sdk/platffrom-tools
  
## 初始化项目

1. react-native init demo 项目名称

2.打开模拟器

3.全局安装eslint

  npm i -g eslint
  
  npm i --save-dev eslint-config-rallycoding
  
  在项目一级目录增加配置文件 .eslintrc
  
  
  
      {
        "extends":"rallycoding"
        }
        
###### 模拟器的使用会占用计算机的大部分内存，为了方便进行项目的调试，可以链接手机设备进行调试，打开手机的开发这模式，链接即可进行调试

###### 以上操作适合6.0以上版本的手机，当手机版本低于6.0时，编译时会报错，则需要重新下载.gradle文件
    
    1.用户/.grandle/文件下,增加grandle-2-2-all.zip文件
    
    2.项目下/android/grandle/wrapper/grandle-wrapper.properties
    
## 启动项目

  1.adb devices 查看链接的手机设备
  
  2.启动项目 react-native run-android
  
  

    
    



