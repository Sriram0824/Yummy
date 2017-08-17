<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="launchpage.aspx.cs" Inherits="yummly.launchpage" %>

<!DOCTYPE html>



<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="launchstyle.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
   <div class="launch">
        <div class="launchUpperSpace">
             <h1> YUMMLY<font size="3"><sup class="sup">&trade;</sup></font></h1><sup></sup>
        </div>
        <div class="leftSpace"></div>
        <div id="slider">
            <figure>
      
            <asp:Image src="images/1.jpg" runat="server" alt=""/>
            <asp:Image src="images/8.jpeg" runat="server" alt=""/>
            <asp:Image src="images/item.jpg" runat="server" alt=""/>
            <asp:Image src="images/3.jpg" runat="server" alt=""/>
            <asp:Image src="images/6.jpg" runat="server" alt=""/>
            </figure>
        </div>
        <div class="login">
            <div id="loginUpperSpace">

            </div>
            <div id="loginCreden">
                <table align="center">
                    <tr>
                        <td></td>
                        <td>
                <h3>Login for more</h3>
                            </td>
                        <td></td>
                        </tr>
                    <tr>
                        <td>
                Username

                        </td>
                        <td>:</td>
                        <td><asp:TextBox ID="TextBox1" runat="server"></asp:TextBox></td>
                        </tr>
                        <tr>
               <td> Password</td><td>:</td><td><asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox></td>
                            </tr>
                        <tr>
              <td> </td><td></td><td> <asp:Button ID="Button3" runat="server" Text="Login"  />&nbsp;&nbsp;<asp:Button ID="Button2" runat="server" Text="Reset" /></td>
                        </tr>
                    </table>
            </div>
            <div id="loginLowerSpace">

            </div>

        </div>
    </div>
    </form>
</body>
</html>
