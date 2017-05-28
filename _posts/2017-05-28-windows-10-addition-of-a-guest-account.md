---
categories:
  - Technology
date: "2017-05-28 10:08:24 America/Toronto"
disqusIdentifier: MFC9K7HHHV4KVGUVJX39UR6EGWE9WTNKXCBGZ5HRKQV36RGQF9KEQ3EG9MKNUYU3B4PVCZ6PYFFKPA35NRK6H6DASZ7Q2PQNGCPN
image:
  height: 343
  path: "https://assets.forces.army/blog/2017/05/28/windows-10-addition-of-a-guest-account/hotlink-ok/guest-user_800x343.png"
  width: 800
last_modified_at: "2017-05-28 10:08:24 America/Toronto"
layout: post
location: "canada_ontario_sudbury_kathleen_557"
tags:
  - "How to"
title: "Windows 10 :: Addition of a Guest Account"
---

<img alt="" height="224" src="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/guest_482x224.png"
  style="border: 0px; float: right; margin-bottom: 10px; margin-left: 10px;" width="482" />
<p>
  A guest account is a local account for users who don't have a permanent account on your device or domain.&nbsp; It allows people (i.e. guests, visitors, etc.)
  to use your device without having access to your personal files.&nbsp; Users signed-in to the guest account can't install apps, open Windows Store apps,
  install hardware, nor change settings.
</p>
<p>
  You can no longer enable the built-in Guest account within Windows 10, but you can workaround this by manually adding a guest account though.&nbsp; This
  article will show you how to add a guest account to your Windows 10 device.&nbsp; You must be signed-in as an administrator to be able to add a guest account.
</p>
<!-- excerptBreak -->
<p>
  <span style="font-weight: bolder;">Note:</span>&nbsp; A guest account can't be a member of a homegroup.
</p>
<p>
  &nbsp;
</p>
<h3 id="option-1-from-the-command-line">
  Option <sup>#</sup>1 &#8212; From the Command Line
</h3>
<p>
  <ol style="list-style-type: decimal;">
    <li>
      Open an elevated command prompt.
    </li>
    <li>
      Type the command below into the elevated command prompt, and press Enter to add a new local account.
      {% highlight shell_session %}
      net user UserName /add
      {% endhighlight %}
      <a href="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_01_678x218.png" rel="me" target="_blank" title=""><img
        alt="" height="155" src="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_01_482x155.png"
        style="border: 0px; display: block; margin-left: auto; margin-right: auto;" width="482" /></a>
    </li>
    <li>
      Type the command below into the elevated command prompt, pressing Enter, to remove this new local account from the Users group.
      {% highlight shell_session %}
      net localgroup Users UserName /delete
      {% endhighlight %}
      <a href="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_02_718x236.png" rel="me" target="_blank" title=""><img
        alt="" height="158" src="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_02_482x158.png"
        style="border: 0px; display: block; margin-left: auto; margin-right: auto;" width="482" /></a>
    </li>
    <li>
      Type the command below into the elevated command prompt, pressing Enter, to add this new local account to the Guests group.
      {% highlight shell_session %}
      net localgroup Guests UserName /add
      {% endhighlight %}
      <a href="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_03_686x214.png" rel="me" target="_blank" title=""><img
        alt="" height="150" src="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_03_482x150.png"
        style="border: 0px; display: block; margin-left: auto; margin-right: auto;" width="482" /></a>
    </li>
    <li>
      If you like, you can add a password to this guest account.
    </li>
    <li>
      When finished, you can close the elevated command prompt.
    </li>
    <li>
      The &quot;C:\Users\UserName&quot; profile folder, for this guest account, will be created the first time that the account is signed-in to.
    </li>
  </ol>
</p>
<p>
  &nbsp;
</p>
<h3 id="option-2-from-within-local-ssers-and-groups">
  Option <sup>#</sup>2 &#8212; From Within Local Users and Groups
</h3>
<p>
  Local Users and Groups, is only available within the Windows 10 Education, Enterprise, and Pro editions.
  <ol style="list-style-type: decimal;">
    <li>
      Press the Win+R keys to open Run, type &quot;lusrmgr.msc&quot;, and click on OK to open Local Users and Groups.
    </li>
    <li>
      Click on the Users folder in the left pane to open it.&nbsp; Click on More Actions and New User in the right &quot;Actions&quot; pane.<br />
      &nbsp;<br />
      <a href="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_04_1068x0294.png" rel="me" target="_blank" title=""><img
        alt="" height="133" src="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_04_0482x0133.png"
        style="border: 0px; display: block; margin-left: auto; margin-right: auto;" width="482" /></a>
    </li>
    <li>
      Type in the username (i.e. &quot;Visitor&quot;) that you want for the new guest account.&nbsp; Fill out any other details (i.e. description, password,
      etc.) should you so desire.&nbsp; Click on Create.&nbsp; Click on Close.<br />
      &nbsp;<br />
      <img alt="" height="386" src="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_05_380x386.png"
        style="border: 0px; display: block; margin-left: auto; margin-right: auto;" width="380" />
    </li>
    <li>
      Double-click on the new user account, within the middle pane, of Local Users and Groups.
    </li>
    <li>
      Click on the Member Of tab, select Users, and click on Remove to remove this account from being a member of the &quot;Users&quot; group.<br />
      &nbsp;<br />
      <img alt="" height="454" src="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_07_398x454.png"
        style="border: 0px; display: block; margin-left: auto; margin-right: auto;" width="398" />
    </li>
    <li>
      Click on Add.<br />
      &nbsp;<br />
      <img alt="" height="453" src="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_08_398x453.png"
        style="border: 0px; display: block; margin-left: auto; margin-right: auto;" width="398" />
    </li>
    <li>
      Type Guests in the &quot;Enter the object names to select&quot; box, and click on OK.
    </li>
    <li>
      Click on OK to add this account as a member of the &quot;Guests&quot; group.<br />
      &nbsp;<br />
      <img alt="" height="453" src="{{ site.uri.assets }}/blog/2017/05/28/windows-10-addition-of-a-guest-account/innominate_10_398x453.png"
        style="border: 0px; display: block; margin-left: auto; margin-right: auto;" width="398" />
    </li>
    <li>
      When finished, you can close Local Users and Groups.
    </li>
    <li>
      The &quot;C:\Users\Username&quot; profile folder, for this guest account, will be created the first time that the account is signed-in to.
    </li>
  </ol>
</p>
