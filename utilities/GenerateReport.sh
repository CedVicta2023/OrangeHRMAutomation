mkdir allure/archive-reports
mv allure/allure-report/* allure/archive-reports/
allure generate --single-file allure/allure-results -o allure/allure-report --clean
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
mv allure/allure-report/index.html allure/allure-report/custom-report_${TIMESTAMP}.html