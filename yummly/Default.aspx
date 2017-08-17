<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="yummly.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="Layout.css" rel="stylesheet" />
    <script src="JavaScript1.js"></script>
    <title></title>
   
    
</head>
<body>
    <form id="form1" runat="server">

         <asp:ScriptManager ID="ScriptManager1" runat="server">
        <Scripts>
            <asp:ScriptReference Path="~/Scripts/jquery-2.1.4.min.js" /> 
            <asp:ScriptReference Path="~/Scripts/yummly.js" />
            <asp:ScriptReference Path="~/Scripts/demo.js" />
            <asp:ScriptReference Path="~/Scripts/JavaScript.js" />
            <asp:ScriptReference Path="~/Scripts/display.js" />
        </Scripts>
    </asp:ScriptManager>

<div class="container">

    <div class="header"> 
         <div class="headerspace">
             <br/> <br/>
             <input type="text" id="search"/>
        <input type="button" value="submit" id="submit" onclick="displayDish()"/>
        </div>
        <div class="banner">
       <h1> YUMMLY<font size="3"><sup class="sup">&trade;</sup></font></h1><sup></sup>
            
        </div>
        <div class="user">
            
        </div>
    </div>
    <div class="postheader">
        
        <div class="seasonal"><h4> Seasonal</h4></div>
        <div class="justforyou"><h4>Just For You</h4></div>
        <div class="popularnow"><h4>Popular Now</h4></div>
        <div class="quickandeasy"><h4>Quick and Easy</h4></div>
        <div class="weeknightdinner"><h5>Weeknight Dinners</h5></div>
        <div class="yummlydish"><h4>Yummly Dish</h4></div>
        <div class="phspace2">

            <ul>
  
  <li>
    Portfolio
    <ul>
      <li>ADD A Recipe</li>
      <li>Just for You</li>
      <li>Collection Box</li>
      <li>Sign Out</li>
    </ul>
  </li>
  
</ul>

        </div>
    </div>


    
    
    <div class="body" >
        

        <div class="item1" ">
            COOKIE SHAKE
             <div class="hover-item1">
                
                
             <table align="center">

                 
                  
                 <tr >
                    <td>
                        <asp:LinkButton ID="LinkButton1" runat="server" Font-Names="georgia" Font-Underline="False" ForeColor="black" PostBackUrl="cookieshake.aspx"> Click! To Cook</asp:LinkButton>
                    </td>
                 </tr>
                

                 
                 
                
                
                 </table>

                 
            </div>

        </div>
        <div class="item2">

            CUP CAKES
             <div class="hover-item1">
                
                
             <table align="center">

                 
                  
                 <tr >
                    <td>
                        <asp:LinkButton ID="LinkButton2" runat="server" Font-Names="georgia" Font-Underline="False" ForeColor="black" PostBackUrl="cookieshake.aspx"> Click! To Cook</asp:LinkButton>
                    </td>
                 </tr>
                

                 
                 
                
                
                 </table>

                 
            </div>


        </div>
        <div class="item3">
            BURRITOS
             <div class="hover-item1">
                
                
             <table align="center">

                 
                  
                 <tr >
                    <td>
                        <asp:LinkButton ID="LinkButton3" runat="server" Font-Names="georgia" Font-Underline="False" ForeColor="black" PostBackUrl="cookieshake.aspx"> Click! To Cook</asp:LinkButton>
                    </td>
                 </tr>
                

                 
                 
                
                
                 </table>

                 
            </div>


        </div>
        <div class="item4">

            CHALUPA
             <div class="hover-item1">
                
                
             <table align="center">

                 
                  
                 <tr >
                    <td>
                        <asp:LinkButton ID="LinkButton4" runat="server" Font-Names="georgia" Font-Underline="False" ForeColor="black" PostBackUrl="cookieshake.aspx"> Click! To Cook</asp:LinkButton>
                    </td>
                 </tr>
                

                 
                 
                
                
                 </table>

                 
            </div>

        </div>

        <div class="item5">
           CHALUPA
             <div class="hover-item1">
                
                
             <table align="center">

                 
                  
                 <tr >
                    <td>
                        <asp:LinkButton ID="LinkButton5" runat="server" Font-Names="georgia" Font-Underline="False" ForeColor="black" PostBackUrl="cookieshake.aspx"> Click! To Cook</asp:LinkButton>
                    </td>
                 </tr>
                

                 
                 
                
                
                 </table>

                 
            </div>


        </div>
        <div class="item6">
            MILK SHAKE
             <div class="hover-item1">
                
                
             <table align="center">

                 
                  
                 <tr >
                    <td>
                        <asp:LinkButton ID="LinkButton6" runat="server" Font-Names="georgia" Font-Underline="False" ForeColor="black" PostBackUrl="cookieshake.aspx"> Click! To Cook</asp:LinkButton>
                    </td>
                 </tr>
                

                 
                 
                
                
                 </table>

                 
            </div>


        </div>
        <div class="item7">
            CHALUPA
             <div class="hover-item1">
                
                
             <table align="center">

                 
                  
                 <tr >
                    <td>
                        <asp:LinkButton ID="LinkButton7" runat="server" Font-Names="georgia" Font-Underline="False" ForeColor="black" PostBackUrl="cookieshake.aspx"> Click! To Cook</asp:LinkButton>
                    </td>
                 </tr>
                

                 
                 
                
                
                 </table>

                 
            </div>

        </div>
        <div class="item8">
            BURRITOS
             <div class="hover-item1">
                
                
             <table align="center">

                 
                  
                 <tr >
                    <td>
                        <asp:LinkButton ID="LinkButton8" runat="server" Font-Names="georgia" Font-Underline="False" ForeColor="black" PostBackUrl="cookieshake.aspx"> Click! To Cook</asp:LinkButton>
                    </td>
                 </tr>
                

                 
                 
                
                
                 </table>

                 
            </div>


        </div>


         <div class="item9"></div>
        <div class="item10"></div>
        <div class="item11"></div>
        <div class="item12"></div>

         <div class="item13"></div>
        <div class="item14"></div>
        <div class="item15"></div>
        <div class="item16"></div>
            

    </div>
        
    <div class="prefooter"> Copyrights@ MIS2015</div>

            
    

</div>

</form>
</body>
</html>
