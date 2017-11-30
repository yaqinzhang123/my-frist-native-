# my-frist-native-

1.安装java sdk 

  [java sdk](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

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
    
    1.用户/.grandle/wrapper/dists,增加grandle-2-2-all.zip文件
    
    2.项目下/android/build.gradle 
    
        {
          classpath 'com.android.tools.build:gradle:1.2.3'
        }
    
    2.项目下/android/grandle/wrapper/grandle-wrapper.properties
    
        distributionUrl=https\://services.gradle.org/distributions/gradle-2.2-all.zip
    
## 启动项目

  1.adb devices 查看链接的手机设备
  
  2.启动项目 react-native run-android
  
  
  
## 报错处理
  
  1.端口被占用，结束进程（netstat -aon 此命令查看占用端口的进程）
        error: could not install *smartsocket* listener: cannot bind to 127.0.0.1:5037: 通常每个套接字地址(协议/网络地址/端口)只允许使用一次。 (10048)

    This application has requested the Runtime to terminate it in an unusual way.
    Please contact the application's support team for more information.
    adb server version (31) doesn't match this client (39); killing...
    could not read ok from ADB Server
    * failed to start daemon *
    error: cannot connect to daemon
    
    
    
    
  2.  .grandle下载的版本不匹配，不能编译
  
    * What went wrong:
    Execution failed for task ':app:installDebug'.
    > com.android.builder.testing.api.DeviceException: Could not create ADB Bridge. ADB location:      C:\Users\mandy\AppData\Local\Android\sdk\platform-tools\adb.exe

    * Try:
    Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

    BUILD FAILED

    Total time: 3 mins 21.044 secs
    Could not install the app on the device, read the error above for details.
    Make sure you have an Android emulator running or a device connected and have
    set up your Android development environment:
    https://facebook.github.io/react-native/docs/android-setup.html


  

    
    



