<h1>Human-Vs-Bot Response Behavior</h1>
<p>
This project repository contains several R scripts, along with Python code. Except for the data simulation stage, the core analyses remain consistent across both languages.
Each section: simulating data, logistic regression, and machine learning, includeds PNG images of both R and Python output. Additional visualizations can be found in the scripts themselves.
</p>

<p>
  <em>Response behavior</em> refers to an event or asn interaction between a user, whether human or bot, and a website. From the moment a web page is accessed, response events (such as mouse clicks or touch activations) are logged. This project simulates the user response behavior, capturing each interaction from the user's first action through to a predefined end time.
</p>

<p>
  The project is organized into three parts: 
  
  <ul>
    <li><strong>Data simulation</strong> - Rather than scraping real web data, we created functions to simulate patterns that might reflect typical human and bot response behavior.</li>
  <li><strong>Logistic regression</strong> - Once the data is prepared, we use logistic regression to classify user type and assess model performance.</li>
  <li><strong>[Other] machine learning methods</strong> - We compare logistic regression to Support Vector Machines (SVM) and Random Forest (RF) models, examining predictive performance and interpretability.</li>
</ul>
</p>
