---
robotsCache: false
robotsIndex: false
sitemap: false
title: Donated
---

<h1>
  Thank you!
</h1>
<p>
  Your donation is very much appreciated&hellip;
</p>
{% if page.adsDisplay != false %}
{% if page.adSense != false or page.anonymousAds != false %}
<p>
  &nbsp;
</p>
{% if page.adSense != false %}
{% include adsense_responsive.htm %}
{% elsif page.anonymousAds != false %}
{% include anonymousAds_728x090.htm %}
{% endif %}
<p>
  &nbsp;
</p>
{% endif %}
{% endif %}
